

import {Component} from "@angular/core"
@Component ({

selector: 'pm-app',
template: `
<div>
 <h2> Hello, world</h2>
 <h2> Hello {{name}}</h2>
</div>
<div>
    <pm-products></pm-products>
</div>
`,
moduleId:module.id
}
)
export class AppComponent{

    name:String = "Prashant"


}