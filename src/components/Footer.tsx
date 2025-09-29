import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-6xl mx-auto">
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Jar. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Building India's largest micro-savings platform
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.myjar.app/careers/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Careers
            </a>
            <a href="https://www.myjar.app/about/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="https://www.myjar.app/help/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;