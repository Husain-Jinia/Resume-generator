import React from 'react'
import {atom} from 'recoil';

// about
export const about = atom({
    key: 'about',
    default:"This is the about section"
})

// skills
export const skills = atom({
    key: 'skills',
    default:"This is the skills section"
})

// achievement
export const achievement = atom({
    key: 'achievement',
    default:"This is the achievement section"
})

// experience
export const experience = atom({
    key: 'experience',
    default:"This is the experience section"
})

// projects
export const projects = atom({
    key: 'projects',
    default:"This is the projects section"
})