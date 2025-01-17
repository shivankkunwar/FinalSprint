import React from 'react';

export interface question {
    id:number,
    title:string,
    difficulty:string,
    type: string,
    tags:string[],
    Code: React.ComponentType,
    overview: string,
    requirements:string[],
    behavior: string[],
    resources?: string[]
}