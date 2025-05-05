import { HelpCircle, BookOpen, AlertTriangle, Keyboard, GithubIcon } from "lucide-react"
import { Button } from "@components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@components/ui/dropdown-menu"

const UserHelpMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8 cursor-pointer">
                    <HelpCircle className="h-4 w-4" />
                    <span className="sr-only">Help</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 py-2 text-sm">
                    <BookOpen className="h-4 w-4" />
                    <span>Raven user guide</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 py-2 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Report an issue</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 py-2 text-sm">
                    <Keyboard className="h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex cursor-pointer items-center gap-2 py-2 text-sm">
                    <GithubIcon className="h-4 w-4" />
                    <span>GitHub repository</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserHelpMenu
