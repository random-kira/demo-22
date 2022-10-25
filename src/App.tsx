import {defineComponent, onMounted} from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export const App = defineComponent({
  setup(){
    onMounted(()=>{
        console.log('挂载了')
    })
    return () =>(
        <div>
            {/* <div>
                <RouterLink to="/foo">Foo</RouterLink>
            </div>
            <div>
                <RouterLink to="/bar">Bar</RouterLink>
            </div> */}
            <div>开始
                <ul>
                    <li>
                        <RouterLink to="/foo">Foo</RouterLink>
                    </li>
                    <li>
                    <RouterLink to="/bar">Bar</RouterLink>
                    </li>
                </ul>
            </div>
            <div>
                <RouterView/>
            </div>
            <div>
                结束
            </div>
        </div>

    )
}
})