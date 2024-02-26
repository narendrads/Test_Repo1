
import { Header } from "./heder"
import { Slideshow } from "./Banner"
export function Homepage(){
    return (
        <div className="container-fluid">
            <div className="herder">
                <Header/>
            </div>
            <div className="slide">
          <Slideshow/>
            </div>
        </div>
    )
}