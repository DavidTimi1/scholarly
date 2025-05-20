import { UUID } from "crypto";


export interface User {
    name: string,
    program: 'PhD' | 'Masters' | 'Undergrad',
    major: string,
    email: string,
    gradYear: number,
    phone: string,

}



export interface Correction {
    lineNumber: number,
    type: 'grammar' | 'style' | 'clarity' | 'conciseness' | 'readability',
    description: string,
    suggestions: string[],
}

export interface ScannedCV {
    url: string,
    problems: string[],
    suggestions: string[]
}

export interface Commit {
    id: UUID,
    timestamp: string
    description: string,
    diff: Correction[]
}