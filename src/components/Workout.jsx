import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

// Workout component to display a series of exercise cards
export default function Workout(props) {
    const { workout } = props
    return (
        // SectionWrapper component to wrap the workout section with specific id and titles
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, i) => {
                    return (
                        <ExerciseCard i={i} exercise={exercise} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
