import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6" style={{background:'#FFF7DD', color:'#160829'}}>
      <div className="max-w-6xl mx-auto">
        {/* Brand + Socials + Download */}
        <div className="flex flex-col items-start gap-6 pb-10">
          <div className="flex items-center gap-3">
            <img src="/jar-logo.png" alt="Jar" className="h-8 w-auto" />
          </div>
          <p className="text-base text-muted-foreground max-w-2xl">
            Experience a new savings journey! Start saving in 24K Digital Gold with Jar App.
          </p>
          <div className="flex items-center gap-5 text-xl" style={{color:'#160829'}}>
            <a href="https://x.com/JarAppHQ" target="_blank" rel="noopener noreferrer" aria-label="Jar on X" className="hover:opacity-80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2H21l-7.16 8.18L22 22h-6.244l-4.86-6.78L5.3 22H2.54l7.72-9.13L2 2h6.33l4.31 6.16L18.244 2Z"/></svg>
            </a>
            <a href="https://www.instagram.com/jarapphq/" target="_blank" rel="noopener noreferrer" aria-label="Jar on Instagram" className="hover:opacity-80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/jarapp/" target="_blank" rel="noopener noreferrer" aria-label="Jar on LinkedIn" className="hover:opacity-80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5Z"/><path d="M3.5 9h3v12h-3V9Zm6 0h2.9v1.64h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V21h-3v-6.4c0-1.52-.03-3.48-2.12-3.48-2.12 0-2.44 1.66-2.44 3.37V21h-3V9Z"/></svg>
            </a>
            <a href="https://www.facebook.com/MyJarHQ/" target="_blank" rel="noopener noreferrer" aria-label="Jar on Facebook" className="hover:opacity-80">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14 9h3V6h-3c-1.66 0-3 1.34-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9c0-.55.45-1 1-1Z"/></svg>
            </a>
            <a href="https://www.youtube.com/@JarApp" target="_blank" rel="noopener noreferrer" aria-label="Jar on YouTube" className="hover:opacity-80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 12s0-4.5-.6-6.5c-.34-1.1-1.2-2-2.31-2.31C18.09 2.5 12 2.5 12 2.5s-6.09 0-8.09.69A3.62 3.62 0 0 0 1.6 5.5C1 7.5 1 12 1 12s0 4.5.6 6.5c.34 1.1 1.2 2 2.31 2.31C5.91 21.5 12 21.5 12 21.5s6.09 0 8.09-.69a3.62 3.62 0 0 0 2.31-2.31C23 16.5 23 12 23 12Z" stroke="currentColor" strokeWidth="2"/><path d="M10 8l6 4-6 4V8Z" fill="currentColor"/></svg>
            </a>
          </div>
          <div>
            <Button
              variant="cta"
              size="lg"
              className="px-6"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.jar.app&shortlink=jggvo7d5&is_retargeting=true&c=SEO_Web&pid=Blog&source_caller=ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="mr-2"></span> <span className="mr-2">▶</span> Download App
              </a>
            </Button>
          </div>
        </div>
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