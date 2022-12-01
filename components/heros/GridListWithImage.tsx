import React from "react"
import HeroCard from "../composite/HeroCard"

type HeroProps = {
  children?: React.ReactNode
}

export default function GridListWithImage(props: HeroProps): JSX.Element {
  return (
    <section className="bg-slate-200 w-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-slate-700 capitalize lg:text-4xl ">Browse Our Storybook<br />Component Library</h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            <HeroCard
              header="Storybook Library"
              body="Browse our Storybook library to see all of the components in action."
            />
            <HeroCard
              header="Styles & Themes"
              body="Change the look and feel of your app with changes to one or two files."
            />
            <HeroCard
              header="Modular Components"
              body="Components that are built from Base UI Components and are ready to use."
            />
            <HeroCard
              header="Base UI Components"
              body="Buttons, Inputs, Text Areas and other elements you need to build new components."
            />
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}