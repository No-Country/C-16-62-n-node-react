import React from 'react'
import { Avatar, Button, Card } from 'flowbite-react';



function CardsServices() 
{
  return (
    <Card className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Balvanera
      </h5>
      <Avatar img="/images/people/profile-picture-5.jpg" bordered color="success">
      <div className="space-y-1 font-medium dark:text-white">
        <div>Franco Rodriguez</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
      </div>
    </Avatar>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Gasista
      </p>
      <Button>
        Ver Mas
        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
    </Card>
)
};


export default CardsServices

