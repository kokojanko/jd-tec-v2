import Sidebar from '../components/Sidebar'
import HeaderMain from '../components/HeaderMain'
import Footer from '../components/Footer'

function Main(){
    return(
        <div className='Wrapper'>
            <div className='SidebarWrapper'>
                <Sidebar/>
            </div>
            <div className=''>
                <div>
                    <Footer/>
                </div>
                <div>
                    <HeaderMain />
                </div>
            </div>
        </div>
    )
}

export default Main