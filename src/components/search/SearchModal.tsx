
import { useState, useEffect, useRef } from "react";
import { X, Search, Mic, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Setup speech recognition
  useEffect(() => {
    // Check if browser supports SpeechRecognition
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // Use the appropriate constructor
      const SpeechRecognitionConstructor = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognitionConstructor();
      
      // Configure recognition
      const recognition = recognitionRef.current;
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      
      // Set up event handlers
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
        setIsRecording(false);
        toast({
          title: "Voice captured",
          description: `Searching for '${transcript}'`,
        });
      };
      
      recognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsRecording(false);
        toast({
          title: "Error",
          description: "Failed to recognize speech. Please try again.",
          variant: "destructive"
        });
      };
      
      recognition.onend = () => {
        setIsRecording(false);
      };
    }
    
    // Cleanup
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          console.error("Error stopping recognition", e);
        }
      }
    };
  }, [toast]);

  // Mock suggestions based on search term
  useEffect(() => {
    if (searchTerm.length > 1) {
      const mockSuggestions = [
        `${searchTerm} products`,
        `best ${searchTerm}`,
        `${searchTerm} near me`,
        `${searchTerm} with offers`,
        `local ${searchTerm} stores`
      ];
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Real voice search implementation
  const handleVoiceSearch = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Not supported",
        description: "Voice recognition is not supported in your browser.",
        variant: "destructive"
      });
      return;
    }
    
    try {
      if (!isRecording) {
        setIsRecording(true);
        recognitionRef.current.start();
        toast({
          title: "Listening...",
          description: "Please speak now",
        });
      } else {
        setIsRecording(false);
        recognitionRef.current.stop();
      }
    } catch (error) {
      console.error("Speech recognition error:", error);
      setIsRecording(false);
      toast({
        title: "Error",
        description: "An error occurred with voice recognition",
        variant: "destructive"
      });
    }
  };

  // Mock image search
  const handleImageSearch = () => {
    toast({
      title: "Image Search",
      description: "Image search feature coming soon!",
    });
  };

  // Handle search submission
  const handleSearch = (term: string = searchTerm) => {
    if (term) {
      toast({
        title: "Searching",
        description: `Searching for '${term}'`,
      });
      onClose();
    }
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && searchTerm) {
      handleSearch();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl animate-slideDown">
        <div className="flex items-center p-4 border-b">
          <Search className="h-5 w-5 text-neutral mr-2" />
          <Input
            ref={inputRef}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search for products, brands and more..."
            className="flex-1 border-0 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center space-x-2">
            <Button 
              size="icon" 
              variant="ghost" 
              className={cn(
                "h-9 w-9 rounded-full",
                isRecording && "bg-red-100 text-red-500 animate-pulse"
              )}
              onClick={handleVoiceSearch}
            >
              <Mic className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-9 w-9 rounded-full"
              onClick={handleImageSearch}
            >
              <Camera className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-9 w-9 rounded-full"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Search suggestions */}
        {suggestions.length > 0 && (
          <div className="p-2 max-h-96 overflow-y-auto">
            <h4 className="text-sm font-medium text-neutral px-3 py-2">Suggestions</h4>
            <ul>
              {suggestions.map((suggestion, index) => (
                <li key={index}>
                  <button
                    className="flex items-center w-full text-left px-3 py-2 hover:bg-neutral-light rounded-md"
                    onClick={() => handleSearch(suggestion)}
                  >
                    <Search className="h-4 w-4 text-neutral mr-3" />
                    <span>{suggestion}</span>
                    <ArrowRight className="h-4 w-4 text-neutral ml-auto" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Recent searches (mock data) */}
        {!searchTerm && (
          <div className="p-2">
            <div className="flex items-center justify-between px-3 py-2">
              <h4 className="text-sm font-medium text-neutral">Recent Searches</h4>
              <Button variant="link" size="sm" className="text-xs">Clear All</Button>
            </div>
            <ul>
              {["smartphones", "organic vegetables", "toys under 500", "kitchen appliances"].map((term, index) => (
                <li key={index}>
                  <button
                    className="flex items-center w-full text-left px-3 py-2 hover:bg-neutral-light rounded-md"
                    onClick={() => handleSearch(term)}
                  >
                    <Search className="h-4 w-4 text-neutral mr-3" />
                    <span>{term}</span>
                    <ArrowRight className="h-4 w-4 text-neutral ml-auto" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Popular categories */}
        {!searchTerm && (
          <div className="p-2 border-t">
            <h4 className="text-sm font-medium text-neutral px-3 py-2">Popular Categories</h4>
            <div className="flex flex-wrap gap-2 p-2">
              {["Electronics", "Fashion", "Groceries", "Home", "Beauty", "Toys", "Books", "Sports"].map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="bg-neutral-light border-none"
                  onClick={() => handleSearch(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
