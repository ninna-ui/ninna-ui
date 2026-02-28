import { EmptyState } from "@ninna-ui/feedback";
import { Button } from "@ninna-ui/primitives";

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}

export default function WithAction() {
  return (
    <div className="space-y-8">
      <EmptyState
        icon={<PlusIcon />}
        title="No projects yet"
        description="Create your first project to get started."
        action={
          <Button color="primary" leftIcon={<PlusIcon className="w-4 h-4" />}>
            Create Project
          </Button>
        }
      />
      
      <EmptyState
        icon={<ShoppingCartIcon />}
        title="Your cart is empty"
        description="Explore our products and add items to your cart."
        action={
          <div className="flex gap-2">
            <Button variant="outline">Continue Shopping</Button>
            <Button color="primary">View Deals</Button>
          </div>
        }
      />
    </div>
  );
}
