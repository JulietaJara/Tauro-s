"use client"

import { Bot, User } from "lucide-react"
import  Button  from "./ui/button"
import { cn } from "../lib/utils"
import { useEffect, useState, useRef } from "react"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [showOptions, setShowOptions] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "initial-message",
          role: "assistant",
          content:
            "Hola! Soy Caramelo, tu asistente para eventos especiales. ¿Qué tipo de celebración estás planeando?",
        },
      ])
    }
  }, [messages])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, showOptions, isTyping])

  const options = [
    { id: "A", label: "Cumpleaños infantil" },
    { id: "B", label: "Fiestas Adultos" },
    { id: "C", label: "Egresados" },
    { id: "D", label: "Egresaditos" },
    { id: "E", label: "Matinee" },
    { id: "F", label: "Baby Shower" },
    { id: "G", label: "Primer añito" },
  ]

  const responses: Record<string, string> = {
    A: [
      "Cumpleaños infantil - Para 30 adultos y 30 niños",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 3 horas de duración",
      "👩‍🍳 Una camarera",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "⚽ Pelotero",
      "🌈 Sala blanda",
      "🎱 Metegol",
      "🎈 Inflable",
      "🏟️ Canchita de fútbol",
      "🎮 Playstation 4 y 5",
      "🍭 Bolsita de golosinas y piñata",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
      "",
      "👨‍👩‍👧‍👦 La cantidad de adultos y niños se puede personalizar.",
    ].join("\n"),
    B: [
      "Fiestas Adultos - Para 60 personas",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Dos camareras",
      "🎭 Una animadora",
      "🍽 Encargado de cocina",
      "🎱 Metegol",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
      "",
      "👨‍👩‍👧‍👦 La cantidad de personas se puede personalizar.",
    ].join("\n"),
    C: [
      "Egresados - Niños mayores de 10 años",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Dos camareras",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "🍔 Menu infantil",
      "🏟️ Canchita de fútbol",
      "🎮 Playstation 4 y 5",
      "🎱 Metegol",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
      "",
      "👨‍👩‍👧‍👦 La cantidad de personas se puede personalizar.",
    ].join("\n"),
    D: [
      "Egresaditos - Para 40 niños y 50 adultos",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Dos camareras",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "🍕 Pizza party para adultos",
      "🍔 Menu infantil",
      "🎩 Show de magia",
      "🌈 Sala blanda",
      "🎈 Inflable",
      "🏟️ Canchita de fútbol",
      "🎮 Playstation 4 y 5",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
      "",
      "👨‍👩‍👧‍👦 La cantidad de personas se puede personalizar.",
    ].join("\n"),
    E: [
      "Matinee - Para 50 invitados (mayores 11 años)",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Una camarera",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "metrical",
      "🌈 Sala blanda",
      "🎈 Inflable",
      "🏟️ Canchita de fútbol",
      "🎮 Playstation 4 y 5",
      "🍹 Barra de tragos frutales",
      "🍭 Bolsita de golosinas y piñata",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
      "",
      "👨‍👩‍👧‍👦 La cantidad de personas se puede personalizar.",
    ].join("\n"),
    F: [
      "Baby Shower",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Dos camareras",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "⚽ Pelotero",
      "🌈 Sala blanda",
      "🎱 Metegol",
      "💄 Maquillaje para la futura mamá",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
    ].join("\n"),
    G: [
      "Primer añito",
      "",
      "Incluye:",
      "☕ Té/café y kit de mate",
      "⏳ 4 horas de duración",
      "👩‍🍳 Dos camareras",
      "🎭 Una animadora",
      "👶 Persona a cargo del cuidado de los niños",
      "🍽 Encargado de cocina",
      "⚽ Pelotero",
      "🌈 Sala blanda",
      "🎱 Metegol",
      "🎈 Inflable",
      "🏟️ Canchita de fútbol",
      "🎮 Playstation 4 y 5",
      "🍭 Bolsita de golosinas y piñata",
      "💌 Tarjeta de invitación",
      "🍽️ Vajilla completa",
      "📶 Wifi",
      "⚡ Grupo electrógeno",
      "🚗 Estacionamiento privado",
      "🏥 Cobertura médica",
      "❄️ Ambiente climatizado",
      "🌿 Jardín y deck",
      "📽️ Proyector",
    ].join("\n"),
  }

  const handleOptionSelect = (option: string) => {
    const selectedOption = options.find((opt) => opt.id === option)

    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: selectedOption?.label || "",
    }

    setMessages((prevMessages) => [...prevMessages, userMessage])
    setIsTyping(true)
    setShowOptions(false)

    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant" as const,
        content: responses[option] || "No entiendo esa opción, por favor intenta de nuevo.",
      }

      setMessages((prevMessages) => [...prevMessages, botMessage])
      setIsTyping(false)

      setTimeout(() => {
        const followUpMessage = {
          id: (Date.now() + 2).toString(),
          role: "assistant" as const,
          content: "¿Te gustaría conocer otro tipo de evento?",
        }
        setMessages((prevMessages) => [...prevMessages, followUpMessage])
        setShowOptions(true)
      }, 800)
    }, 1200)
  }

  const TypingIndicator = () => (
    <div className="flex items-start gap-3 mb-4 max-w-[85%] sm:max-w-[75%]">
      <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
        <Bot className="w-4 h-4 text-white" />
      </div>
      <div className="flex items-center gap-2 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm">
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50">
      <div className="bg-red-600 p-4 shadow-md">
        <div className="flex items-center gap-3 max-w-4xl mx-auto">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Caramelo</h1>
            <p className="text-red-100 text-sm">Tu asistente para eventos</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 min-h-0">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn("flex items-start gap-3", message.role === "user" && "flex-row-reverse")}
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                  message.role === "user" ? "bg-gray-300" : "bg-red-600",
                )}
              >
                {message.role === "user" ? (
                  <User className="w-4 h-4 text-gray-700" />
                ) : (
                  <Bot className="w-4 h-4 text-white" />
                )}
              </div>

              <div
                className={cn(
                  "rounded-2xl px-4 py-3 shadow-sm max-w-[85%] sm:max-w-[75%]",
                  message.role === "user" ? "bg-red-600 text-white" : "bg-white border border-gray-200 text-gray-800",
                )}
              >
                <div className="text-sm leading-relaxed whitespace-pre-line">{message.content}</div>
              </div>
            </div>
          ))}

          {isTyping && <TypingIndicator />}

          {showOptions && (
            <div className="mt-6 space-y-3 pb-20">
              
              <p className="text-sm text-gray-600 text-center mb-4"> ¡Hola! Para continuar, elegí una de las siguientes opciones 👇 </p>

              {options.map((option) => (
                <Button
                  key={option.id}
                  onClick={() => handleOptionSelect(option.id)}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-3 px-4 hover:bg-red-50 hover:border-red-300 transition-colors text-gray-900"
                >
                  <span className="text-sm font-medium">{option.label}</span>
                </Button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  )
}
