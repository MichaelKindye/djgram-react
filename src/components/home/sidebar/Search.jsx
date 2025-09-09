import { Input } from "@/components/ui/input"
import SearchSvg from "@/assets/search.svg"

const Search = () => {
  return (
    <div className="mb-4 mt-3 ml-1">
      <div className="relative">
        <span className="absolute inset-y-0 left-3 flex items-center">
          <img src={SearchSvg}/>
        </span>
        <Input
          placeholder="Search..."
          variant="default"
          className="pl-10 bg-gray-300 dark:bg-gray-300 dark:focus:bg-white dark:text-black focus-visible:ring-0 focus:bg-white transition-colors"
        />
      </div>
    </div>
  )
}

export default Search
