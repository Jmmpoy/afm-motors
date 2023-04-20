import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="border-t border-black py-4">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-1 md:mb-0">
              <a
                href="https://www.350lab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline hover:text-gray-500 focus:text-gray-500"
              >
                Maintained by 350lab Studio
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
