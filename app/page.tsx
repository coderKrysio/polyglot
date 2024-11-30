"use client";
import { ContentView } from "@/components/content-view";
import { Controls } from "@/components/controls";
import { Header } from "@/components/header";
import { KeyConcepts } from "@/components/key-concepts";
import { useState } from "react";
import type { Mode, ContentTab, SummaryLength, Language } from "../types";
import { SUPPORTED_LANGUAGES } from "../types";

export default function Home() {
    const [mode, setMode] = useState<Mode>("academic");
    const [summaryLength, setSummaryLength] = useState<SummaryLength>("2min");
    const [tab, setTab] = useState<ContentTab>("original");
    const [sourceLanguage, setSourceLanguage] = useState<Language>(
        SUPPORTED_LANGUAGES[0]
    );
    const [targetLanguage, setTargetLanguage] = useState<Language>(
        SUPPORTED_LANGUAGES[1]
    );

    const sampleContent = {
        originalText:
            "The quantum mechanical model of the atom is based on mathematics that describes the probability of finding an electron at a given point around the nucleus.",
        translatedText:
            "El modelo mecánico cuántico del átomo se basa en las matemáticas que describen la probabilidad de encontrar un electrón en un punto dado alrededor del núcleo.",
        summary:
            "The quantum mechanical model describes electron probability distributions around atomic nuclei using mathematical principles.",
    };

    const keyConcepts = [
        { term: "Quantum Mechanics", relevance: 0.9 },
        { term: "Electron", relevance: 0.8 },
        { term: "Probability", relevance: 0.7 },
        { term: "Atomic Model", relevance: 0.6 },
        { term: "Nuclear Physics", relevance: 0.5 },
    ];
    return (
        <div className="w-[500px] h-[500px] bg-gray-50 flex flex-col overflow-hidden">
            <Header />
            <Controls
                mode={mode}
                summaryLength={summaryLength}
                onModeChange={setMode}
                onSummaryLengthChange={setSummaryLength}
            />
            <ContentView
                tab={tab}
                content={sampleContent}
                sourceLanguage={sourceLanguage}
                targetLanguage={targetLanguage}
                onSourceLanguageChange={setSourceLanguage}
                onTargetLanguageChange={setTargetLanguage}
                onTabChange={setTab}
            />
            <KeyConcepts concepts={keyConcepts} />
        </div>
    );
}
