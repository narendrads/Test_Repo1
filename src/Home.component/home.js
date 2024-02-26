
import { Header } from "./heder"
import { Slideshow } from "./Banner"
import { Banner } from "./backgroundbanner"
export function Homepage(){
    return (
        <div className="container-fluid">
            <Banner/>
            <div className="herder">
                <Header/>
            </div>
            <div className="slide">
          <Slideshow/>
            </div>
        </div>
    )
}