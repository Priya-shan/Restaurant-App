import { VariantProps, cva } from "class-variance-authority"
import { Children, ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

export const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      light: [
        "bg-gray-700", 
        "hover:bg-gray-600", 
        "text-violet"
    ],
      dark: [
        "bg-violet-800",
        "hover:bg-violet-700",
        "text-white",
      ],
    },
    size: {
      rectangle: [
        "w-28",
        "h-10",
        "flex",
        "items-center",
        "space-x-2",
        "p-4"],
      square: [
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center"
      ],
      round: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "dark",
    size: "rectangle",
  },
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button"> & {
    // text: string;
    children?: React.ReactNode;
  };

function Buttons({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}>  
      {/* className={twMerge(className, buttonStyles({ variant, size }))} */}
      {children}
      </button>
      
  )
}

export default Buttons;




// import React from 'react'

// interface ButtonComponentProps {
//   text: string
//   clickFn?: (event?: any) => void
//   children?: any
// }

// function Buttons({
//   text,
//   clickFn,
//   children
// }: ButtonComponentProps): React.JSX.Element {
//   return (
//     <button className='bg-violet-500 text-white w-32' onClick={clickFn}>
//       {text}
//       <span>{children}</span>
//     </button>
//   )
// }

// export default Buttons;

