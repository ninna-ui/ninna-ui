import { EmptyState } from "@ninna-ui/feedback";
import { Button, Text, List, ListItem } from "@ninna-ui/primitives";

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function UsersIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

export default function UseCases() {
  return (
    <div className="space-y-8">
      {/* No Documents */}
      <div className="p-6 border border-base-300 rounded-lg">
        <EmptyState
          icon={<DocumentIcon />}
          title="No documents"
          description="You haven't created any documents yet. Start by creating your first document."
          action={<Button color="primary">Create Document</Button>}
        />
      </div>

      {/* No Team Members */}
      <div className="p-6 border border-base-300 rounded-lg">
        <EmptyState
          icon={<UsersIcon />}
          title="No team members"
          description="Invite team members to collaborate on this project."
          action={
            <div className="flex gap-2">
              <Button variant="outline">Import from CSV</Button>
              <Button color="primary">Invite Members</Button>
            </div>
          }
        />
      </div>

      {/* No Notifications */}
      <div className="p-6 border border-base-300 rounded-lg">
        <EmptyState
          icon={<BellIcon />}
          title="All caught up!"
          description="You have no new notifications."
          size="sm"
        />
      </div>

      {/* Search Results with Suggestions */}
      <div className="p-6 border border-base-300 rounded-lg">
        <EmptyState
          icon={<SearchIcon />}
          title="No results found"
          description="Try adjusting your search"
        >
          <div className="mt-4 text-left">
            <Text size="sm" weight="medium" className="mb-2">Suggestions:</Text>
            <List type="unordered" marker="disc" spacing="sm">
              <ListItem>Try removing filters</ListItem>
              <ListItem>Try different keywords</ListItem>
              <ListItem>Check for typos</ListItem>
            </List>
          </div>
        </EmptyState>
      </div>
    </div>
  );
}
