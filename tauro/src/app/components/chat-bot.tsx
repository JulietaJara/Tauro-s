"use client"

import { useChat } from "ai/react"
import { Bot, Send, User } from "lucide-react"
import Button from "./ui/button"
import { Input } from "./ui/input"
import { cn } from "../lib/utils"
import { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"

export default function ChatBot() {
    const { messages, input, handleInputChange, handleSubmit, setMessages } = useChat()
    const [isTyping, setIsTyping] = useState(false);
    const [showOptions, setShowOptions] = useState(true);

    useEffect(() => {
        if (messages.length === 0) {
            setMessages([{
                id: "initial-message",
                role: "assistant" as const,
                content: getInitialMessage(),
            }]);
        }
    }, [messages, setMessages]);

    const getInitialMessage = () => (
        "¡Hola! Soy Caramelo. ¿Qué opción querrías consultar?\n\n" +
        Object.keys(responses).map((option) => `${option}. ${responses[option].title}`).join("\n")
    );

    const responses: Record<string, { title: string, details: string }> = {
        A: { title: "Cumpleaños infantil", details: ["El cumpleaños infantil incluye para 30 adultos y 30 niños:",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 3 horas de duración",
            "👩‍🍳 Una camarera",
            "🎭 Una animadora",
            "👶 Una persona a cargo del cuidado de los niños",
            "🍽 Un encargado de cocina",
            "⚽ Pelotero",
            "🌈 Sala blanda",
            "🎱 Metegol",
            "🎈 Inflable",
            "🏟️ Canchita de fútbol",
            "🎮 Playstation 4 y 5",
            "🍭 Bolsita de golosinas y piñata",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n")},
        B: { title: "Fiestas Adultos", details: ["La fiesta para adultos incluye para 60 personas:",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Dos camareras",
            "🎭 Una animadora",
            "🍽 Un encargado de cocina",
            "🎱 Metegol",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
        C: { title: "Egresados", details: ["Egresados incluye (niños mayores de 10 años):",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Dos camareras",
            "🎭 Una animadora",
            "🍽 Un encargado de cocina",
            "🍔 Menu infantil",
            "🏟️ Canchita de fútbol",
            "🎮 Playstation 4 y 5",
            "🎱 Metegol",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
        D: { title: "Egresaditos", details: ["Egresaditos incluye para 40 niños y 50 adultos:",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Dos camareras",
            "🎭 Una animadora",
            "👶 Una persona a cargo del cuidado de los niños",
            "🍽 Un encargado de cocina",
            "🍕 Pizza party para adultos",
            "🍔 Menu infantil",
            "🎩 Show de magia",
            "🌈 Sala blanda",
            "🎈 Inflable",
            "🏟️ Canchita de fútbol",
            "🎮 Playstation 4 y 5",
            "🎱 Metegol",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
        E: { title: "Matinee", details: ["La matinee incluye para 50 invitados (mayores 11 años):",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Una camarera",
            "🎭 Una animadora",
            "👶 Una persona a cargo del cuidado de los niños",
            "🍽 Un encargado de cocina",
            "🎱 Metegol",
            "🏟️ Canchita de fútbol",
            "🎮 Playstation 4 y 5",
            "🍹 Barra de tragos frutales",
            "🍭 Bolsita de golosinas y piñata",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
        F: { title: "Baby Shower", details: ["El baby Shower incluye:",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Dos camareras",
            "🎭 Una animadora",
            "👶 Una persona a cargo del cuidado de los niños",
            "🍽 Un encargado de cocina",
            "⚽ Pelotero",
            "🌈 Sala blanda",
            "🎱 Metegol",
            "💄 Maquillaje para la futura mamá",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
        G: { title: "Primer añito", details: ["El primer añito incluye:",
            "☕ Té/café y kit de mate en el momento de la torta",
            "⏳ 4 horas de duración",
            "👩‍🍳 Dos camareras",
            "🎭 Una animadora",
            "👶 Una persona a cargo del cuidado de los niños",
            "🍽 Un encargado de cocina",
            "⚽ Pelotero",
            "🌈 Sala blanda",
            "🎱 Metegol",
            "🎈 Inflable",
            "🏟️ Canchita de fútbol",
            "🎮 Playstation 4 y 5",
            "🍭 Bolsita de golosinas y piñata",
            "💌 Tarjeta de invitación",
            "🍽️ Vajilla apta para servicio de lunch",
            "📶 Wifi",
            "⚡ Grupo electrógeno",
            "🚗 Estacionamiento privado",
            "🏥 Cobertura médica",
            "❄️ Ambiente climatizado",
            "🌿 Jardín y deck",
            "📽️ Proyector"
        ].join("\n") },
    };

    const handleOptionSelect = (option: string) => {
        const userMessage = { id: Date.now().toString(), role: "user" as const, content: `Opción ${option}` };
        const typingMessage = { id: (Date.now() + 1).toString(), role: "assistant" as const, content: "Escribiendo..." };

        setMessages((prevMessages) => [...prevMessages, userMessage, typingMessage]);
        setIsTyping(true);
        setShowOptions(false);

        setTimeout(() => {
            const botMessage = {
                id: (Date.now() + 2).toString(),
                role: "assistant" as const,
                content: responses[option]?.details || "No entiendo esa opción, por favor intenta de nuevo.",
            };
            const followUpMessage = {
                id: (Date.now() + 3).toString(),
                role: "assistant" as const,
                content: "¿Te gustaría saber sobre otro tipo de eventos?\n\n" +
                Object.keys(responses).map((option) => `${option}. ${responses[option].title}`).join("\n"),
            };

            setMessages((prevMessages) =>
                prevMessages.filter(msg => msg.id !== typingMessage.id).concat(botMessage, followUpMessage)
            );
            setIsTyping(false);
            setShowOptions(true);
        }, 2000);
    };

    return (
        <div className="flex flex-col w-full h-[600px] border rounded-lg overflow-hidden bg-background">
            <div className="flex items-center p-4 border-b">
                <Bot className="w-6 h-6 mr-2" />
                <h2 className="font-semibold">Caramelo - Asistente Virtual</h2>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={cn("flex items-start gap-3 max-w-[80%]", message.role === "user" ? "ml-auto" : "")}>
                        <div className={cn("rounded-lg px-3 py-2 text-sm", message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted")}>
                            <div className="flex items-center gap-2">
                                {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                <span style={{ whiteSpace: "pre-line" }}>{message.content}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {(messages.length === 1 || showOptions) && (
                    <Card className="mt-4">
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-2 gap-2">
                                {Object.keys(responses).map((option) => (
                                    <Button key={option} onClick={() => handleOptionSelect(option)} variant="outline">
                                        Opción {option}
                                    </Button>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    )
}
