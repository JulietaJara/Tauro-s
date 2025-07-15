"use client";

import React from "react";
import { Users, Utensils, Music, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card"; 

export default function Services() {
  const services = [
    { icon: Users, title: "Capacidad", desc: "Hasta 100 invitados", color: "text-red-600" },
    { icon: Utensils, title: "Catering", desc: "Menús personalizados", color: "text-red-600" },
    { icon: Music, title: "Audio/Video", desc: "Equipo profesional", color: "text-red-600" },
    { icon: Calendar, title: "Coordinación", desc: "Planificación completa", color: "text-red-600" },
  ];

  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas para tu evento perfecto</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <service.icon className={`h-12 w-12 mx-auto mb-4 ${service.color}`} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
