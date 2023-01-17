import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex justify-start items-center p-5">
        <Link href={"/"} className="text-brand flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-brand mr-2" />
          Back to blog
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
