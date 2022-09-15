import React, {useState, useEffect} from 'react'
import { Label, Pivot, PivotItem, PrimaryButton } from '@fluentui/react';
import '../../custom.css'

/**
 *  This Component is the main app functionality where GET and PATCH requests are built and results displayed. 
 * */

export function Manager() {
    return(
        <div>
            <div className="w-auto h-[90vh] bg-slate-300 glass rounded-xl mx-10 mt-4 mb-5 relative">
                <Pivot className='text-center bg-gray-100 border-t-2 rounded-xl border-y-blue-600 mt-2 w-auto mx-4 h-12' linkSize='large' aria-label="Basic Pivot Example">
                    <PivotItem headerText="Get Tenant Settings">
                        {GetSettingsManager()}
                    </PivotItem>
                    <PivotItem className='bg-green-500' headerText="Update Tenant Settings">
                    <Label>PLACEHOLDER</Label>
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    )
    
}

function GetSettingsManager() {
    
    const [tenantSettings, setTenantSettings] = useState({})
    const [callStatus, setCallStatus] = useState({
        StatusCode: 0,
        StatusText: ""
    })
    const [loading, setLoading] = useState(true)    

    return(
        <div className=''>
            <div className='bg-slate-300 text-left mt-3'>
                <Label className='text-2xl text-sans'>Request</Label>
                <code className='rounded-lg bg-gray-100 text-blue-600 pl-2 pr-1 inline-flex'>GET https://graph.microsoft.com/beta/admin/sharepoint/settings</code>
                <PrimaryButton className=' translate-x-2 text-white bg-blue-600 rounded-lg inline-flex' onClick={() => {
                    fetch('tenantsettings')
                        .then((response) => {
                            console.log("Status Code: ", response.status, " | Status Text: ", response.statusText) 
                            setCallStatus({
                                StatusCode: response.status,
                                StatusText: response.statusText
                            })
                            return response.json()
                        })
                        .then((data) => {
                            console.log(data)
                            delete data["@odata.context"]
                            console.log(JSON.stringify(data, 4, "\t"))
                            setTenantSettings(data)
                            console.log(tenantSettings)
                            setLoading(false)
                            
                        })
                }}> Submit Query</PrimaryButton>
            </div>
            <div className='bg-slate-300'>
                <Label className='text-2xl text-sans text-left mt-2'>Results</Label>
            </div>
            <div id='Results-Box' className='bg-gray-100 rounded-md text-xs w-[49%]'>
                {/* <code className='ml-1 '>
                    { (loading) ?
                    "chilling" :
                    tenantSettings}
                </code> */
                (loading) ?
                    <code className='text-right text-red-700'>{"<empty response>"}</code>:
                    <pre className='text-left ml-4 py-2 text-red-700'><code>{JSON.stringify(tenantSettings, 2, "\t")}</code></pre>
                    //renderSettingsTable(tenantSettings)
                }
            </div>
        </div>
    )
}

// function renderSettingsTable(settings) {
//     const settingKeys = Object.keys(settings)
//     settingKeys.map(key => {
//         if (key === "idleSessionSignOut" || Array.isArray(settings[key]))
//         {
//             console.log("Fixing idleSessionSignOut")
//             settings[key] = JSON.stringify(settings[key])
//         }
//         else if (typeof(settings[key]) != typeof("string")) {
//             console.log("fixing the non-strings \n")
//             settings[key] = String(settings[key])
//         }
//     })

//     return (
//         <table className='table break-words table-fixed table-striped' aria-labelledby="tabelLabel">
//         <thead>
//           <tr>
//             <th>Setting Name</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           {settingKeys.map(key => 
//             <tr key={key}>
//                 <td>{key}</td>
//                 <td>{settings[key]}</td>
//             </tr>
//             )}
//         </tbody>
//       </table>
//     )
// }