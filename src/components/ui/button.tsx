
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group border-2 border-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.6),inset_0_0_15px_rgba(251,191,36,0.2)] hover:shadow-[0_0_25px_rgba(251,191,36,0.8),inset_0_0_25px_rgba(251,191,36,0.3)] hover:border-yellow-300",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-resurrection-primary to-resurrection-secondary text-primary-foreground hover:shadow-2xl hover:shadow-resurrection-primary/50 hover:scale-105 hover:-translate-y-1 btn-glow",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg hover:scale-105",
        outline:
          "border-yellow-400 bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-yellow-300 hover:scale-102 hover:shadow-lg",
        secondary:
          "bg-gradient-to-r from-resurrection-secondary to-resurrection-accent text-secondary-foreground hover:shadow-xl hover:shadow-resurrection-secondary/40 hover:scale-105",
        ghost: "border-yellow-400/60 hover:bg-accent hover:text-accent-foreground hover:scale-102 hover:border-yellow-400",
        link: "border-transparent text-primary underline-offset-4 hover:underline hover:scale-105 shadow-none hover:shadow-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
