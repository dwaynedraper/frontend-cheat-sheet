import React from 'react'

const bulletPoints = [
  "Performance Optimization Guide",
  "Accessibility Guide",
  "Storybook Component Library with Code Examples",
  "Full-Stack Starter Repo for components you find on site",
  "Catalog of Custom Hooks",
  "Tips & Tricks for nearly every frontend technology",
  "Interactive Tutorials",
  "Cheat Sheets & Reference Guides",
  "Code Snippets",
  "Detailed Documentation",
  "Text Effects",
  "Scroll Effects",
  "Prebuilt Themes",
  "Canvas API Animations",
  "And so much more!",
]

export default function BulletPoints() {
  return (
    <ul>
      {bulletPoints.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  )
}
