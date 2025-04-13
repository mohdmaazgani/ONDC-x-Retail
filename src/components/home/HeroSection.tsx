import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search, Mic, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const { toast } = useToast();
  
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
  
  // Voice search handler
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

  // Placeholder for image search
  const handleImageSearch = () => {
    toast({
      title: "Image Search",
      description: "Image search feature coming soon!",
    });
  };
  
  return (
    <section className="relative bg-gradient-to-br from-primary-light via-white to-secondary-light overflow-hidden">
      <div className="container px-4 py-12 md:py-24 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-neutral-dark mb-4">
          Discover Products Across <span className="text-primary">ONDC</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-dark/80 max-w-3xl mb-8">
          A unified search experience across all ONDC sellers. Find exactly what you need with voice, image, and text search.
        </p>
        
        <div className="relative w-full max-w-xl mb-12">
          <div className="flex rounded-full border-2 border-primary bg-white shadow-lg">
            <div className="flex-1 flex items-center">
              <Search className="ml-4 h-5 w-5 text-neutral" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for anything across ONDC..."
                className="w-full py-3 px-3 text-neutral-dark focus:outline-none bg-transparent"
              />
            </div>
            
            <div className="flex">
              <Button 
                variant="ghost" 
                size="icon" 
                className={cn(
                  "rounded-full h-12 w-12",
                  isRecording && "bg-red-100 text-red-500 animate-pulse"
                )}
                onClick={handleVoiceSearch}
              >
                <Mic className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-12 w-12" onClick={handleImageSearch}>
                <Camera className="h-5 w-5 text-primary" />
              </Button>
              <Button className="rounded-full h-12 px-6 bg-primary hover:bg-primary-dark">
                Search
              </Button>
            </div>
          </div>
          
          {/* Popular searches */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-neutral-dark/70">Popular:</span>
            {["Electronics", "Organic Food", "Fashion", "Home Decor", "Local Services"].map((item, i) => (
              <Button 
                key={i}
                variant="link" 
                className="text-sm text-primary px-1 py-0 h-auto"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 w-full max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-lg mb-2">Unified Search</h3>
            <p className="text-neutral-dark/80 text-sm">
              Search across all ONDC sellers in one place with intelligent filtering
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-lg mb-2">Smart Discovery</h3>
            <p className="text-neutral-dark/80 text-sm">
              Find exactly what you want with AI-powered recommendations
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
            <div className="text-3xl mb-3">🛍️</div>
            <h3 className="font-semibold text-lg mb-2">Local Focus</h3>
            <p className="text-neutral-dark/80 text-sm">
              Discover local sellers and products in your neighborhood
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
