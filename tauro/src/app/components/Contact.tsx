"use client";

import { Card, CardContent } from "./ui/card";
import {Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  const email = "tauros.berazategui.eventos@gmail.com";
  const whatsapp = "https://wa.me/5491170295182";

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardContent className="flex flex-col space-y-4 p-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-400" size={24} />
              <a
                href={`mailto:${email}`}
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="text-gray-400" size={24} />
              <a
                href={whatsapp}
                className="text-lg text-gray-700 hover:text-gray-900 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

  
