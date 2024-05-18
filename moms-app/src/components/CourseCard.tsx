import { Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { MaxWidthWrapper } from "./MaxWidthWrapper";

export const CourseCard = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <div className={cn(
            'h-full mx-auto w-full max-w-screen-xl px-2 md:px-5',
            className
        )}>
            <MaxWidthWrapper className="bg">
                <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="min-w-[80%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[23%] bg-black border border-gray-200 rounded-lg shadow">
                            <div className="rounded m-5">
                                <img
                                    className="rounded-md"
                                    src="https://d312wdvz7m5f2r.cloudfront.net/Course_Thumbnails/Cake_Class_Thumbnail.png"
                                    alt="product image"
                                />
                            </div>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Basic to Advance Cake Class
                                    </h5>
                                </a>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                    </div>
                                    <div className="bg-white rounded ml-4">
                                        <Badge variant="default">5.0</Badge>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹1999</span>
                                    <div
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-2 text-center"
                                    >
                                        Add to cart
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </div>
    );
};
