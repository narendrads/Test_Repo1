
import { Header } from "./heder"
import { Slideshow } from "./Banner"
import { MainCardcomponent } from "./mainCard"
import { MainCardcomponent2 } from "./mainCards2"
import { Footer } from "./footer"
export function Homepage(){
    return (
        <div className="container-fluid">
            <div className="herder">
                <Header/>
            </div>
            <div className="slide">
          <Slideshow/>
            </div>
            <div>
                <div>
                <MainCardcomponent/>
                </div>
                <div>
                    <MainCardcomponent2/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}