
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Camera, Search, Menu, X, ShoppingBag, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import SearchModal from '../search/SearchModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearchModal = () => setIsSearchModalOpen(!isSearchModalOpen);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
          
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-primary">ONDC</span>
            <span className="font-semibold text-neutral-dark">Hub</span>
          </Link>
        </div>
        
        {!isMobile && (
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input 
                placeholder="Search for products, brands and more..." 
                className="pl-10 pr-24 h-10 bg-neutral-light focus-visible:ring-primary"
                onClick={toggleSearchModal}
                readOnly
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-neutral" />
              <div className="absolute right-2 top-1.5 flex space-x-1">
                <Button size="icon" variant="ghost" className="h-7 w-7" onClick={toggleSearchModal}>
                  <Mic className="h-4 w-4 text-neutral" />
                </Button>
                <Button size="icon" variant="ghost" className="h-7 w-7" onClick={toggleSearchModal}>
                  <Camera className="h-4 w-4 text-neutral" />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-1">
          {isMobile && (
            <Button variant="ghost" size="icon" onClick={toggleSearchModal}>
              <Search className="h-5 w-5" />
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-x-0 top-16 bg-white border-b p-4 md:hidden transition-all duration-300 ease-in-out transform",
        isMenuOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <nav className="space-y-4">
          <Link to="/" className="block py-2 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/categories" className="block py-2 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Categories</Link>
          <Link to="/deals" className="block py-2 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Deals</Link>
          <Link to="/new-arrivals" className="block py-2 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>New Arrivals</Link>
          <Link to="/popular" className="block py-2 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>Popular</Link>
        </nav>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </header>
  );
};

export default Header;
