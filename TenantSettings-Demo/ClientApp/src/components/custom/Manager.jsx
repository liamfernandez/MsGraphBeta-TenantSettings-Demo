import React, {useState} from 'react'
import { Label, Pivot, PivotItem, PrimaryButton, TextField, Spinner, SpinnerSize } from '@fluentui/react';
import '../../custom.css'

/**
 *  This Component is the main app functionality where GET and PATCH requests are built and results displayed. 
 * */

export function Manager() {
    return(
        <div>
            <div className="w-auto h-[90vh] bg-slate-300 glass rounded-xl mx-10 mt-4 mb-5 relative">
                <Pivot className='text-center bg-gray-100 border-t-2 rounded-xl border-t-blue-600 mt-2 w-auto mx-4 h-11' linkSize='large' aria-label="Basic Pivot Example">
                    <PivotItem headerText="Get Tenant Settings">
                        {GetSettingsManager()}
                    </PivotItem>
                    <PivotItem className='' headerText="Update Tenant Settings">
                        {PatchSettingsManager()}
                    </PivotItem>
                </Pivot>
            </div>
        </div>
    )
    
}

function PatchSettingsManager() {
    const [tenantSettings, setTenantSettings] = useState({})
    const [callStatus, setCallStatus] = useState({
        StatusCode: "N/A",
        StatusText: "N/A",
        TimeOfRequest: "N/A",
        StatusBoxColor: "border-y-black"
    })
    const [loading, setLoading] = useState(true)
    const [firstQueryMade, setFirstQueryMade] = useState(false)
    const placeHolderString = '{\n    isSitesStorageLimitAutomatic: false,\n    deletedPersonalSiteRetentionInDays: 45\n}' 

    return(
        <div className='grid grid-cols-2'>
            <div className='bg-slate-300 text-left mt-3'>
                <Label className='text-2xl text-sans'>Request</Label>
                <div className='bg-gray-100 rounded-xl w-fit p-2 border-2 border-red-600'>
                    <code className=' bg-gray-100 text-red-600'><b> PATCH</b><br></br></code>
                    <code className=' bg-gray-100 text-black text-sm'>https://graph.microsoft.com/beta/admin/sharepoint/settings</code>
                </div>
                <PrimaryButton className='mt-2 text-white bg-red-600 border-black rounded-lg inline-flex' onClick={() => {
                    setFirstQueryMade(true)
                    setLoading(true)
                    fetch('tenantsettings', {
                        method: 'PATCH',
                        body: JSON.stringify(document.getElementById('patch-body').value),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then((response) => {
                            console.log("PATCH request sent \n")
                            console.log("Status Code: ", response.status, " | Status Text: ", response.statusText) 
                            setCallStatus({
                                StatusCode: response.status,
                                StatusText: response.statusText,
                                TimeOfRequest: new Date().toLocaleTimeString(),
                                StatusBoxColor: (response.statusText === 'OK') ? "border-y-green-600" : "border-y-red-500"
                            })
                            if (response.statusText != 'OK')
                            {
                                setTenantSettings("Call failed - Check Console for more info")
                                setLoading(false)
                            }
                            return response.json()
                        })
                        .then((data) => {
                            console.log(data)
                            delete data["@odata.context"]
                            console.log(JSON.stringify(data, 2, "\t"))
                            setTenantSettings(data)
                            console.log(tenantSettings)
                            setLoading(false)
                            
                        })
                }}> Submit Request</PrimaryButton>
                <div id='input-body-Patch' className='w-[90%]'>
                    <Label className='text-xl text-sans mt-4'>Request Body</Label>
                    <TextField id='patch-body' tabIndex={2} multiline autoAdjustHeight rows={10} className='rounded-2xl' placeholder={placeHolderString}>

                    </TextField>
                </div>
                <Label className='text-2xl text-sans mt-4 mr-60'>Call Status</Label>
                <div className={'bg-gray-100 w-fit rounded-lg p-2 border-y-4 ' + callStatus.StatusBoxColor}>
                    <p className='bg-gray-100 w-fit rounded-lg'><b>Status-Code: </b>{`${callStatus.StatusCode} | `}<b>Response: </b> {callStatus.StatusText}</p>
                    <p className='bg-gray-100 w-fit rounded-lg'><b>Time of Request: </b>{callStatus.TimeOfRequest}</p>
                    {(callStatus.StatusText != 'OK' && callStatus.TimeOfRequest != 'N/A')
                    ? <p className='text-center text-red-500 text-xs'>Check console for more info</p> :
                    undefined}
                </div>
            </div>
            <div className='bg-slate-300 ml-4'>
                <Label className='text-2xl text-sans text-left mt-3'>Results</Label>
                <div id='Results-Box' className='bg-gray-100 rounded-md w-auto text-xs h-[67vh]'>
                    { (firstQueryMade) ?
                        (loading) ?
                            <Spinner className='pt-10' size={SpinnerSize.large} label='Updating Settings...'/>
                            : <pre className='text-left ml-4 py-2 text-red-800'><code>{JSON.stringify(tenantSettings, 2, "\t")}</code></pre>
                        :
                            <code className='text-right text-red-700 align-middle'>{"<empty response>"}</code>
                    }
                </div>
            </div>
        </div>
    )
}

function GetSettingsManager() {
    const [tenantSettings, setTenantSettings] = useState({})
    const [callStatus, setCallStatus] = useState({
        StatusCode: "N/A",
        StatusText: "N/A",
        TimeOfRequest: "N/A",
        StatusBoxColor: "border-y-black"
    })
    const [loading, setLoading] = useState(true)    
    const [firstQueryMade, setFirstQueryMade] = useState(false)

    return(
        <div className='grid grid-cols-2'>
            <div className='bg-slate-300 text-left mt-3'>
                <Label className='text-2xl text-sans'>Request</Label>
                <div className='bg-gray-100 rounded-xl w-fit p-2 border-2 border-blue-600'>
                    <pre>
                        <code className=' text-black text-sm'>
                            <b className='text-blue-600 text-base'>GET </b>
                            <br></br>
                            https://graph.microsoft.com/beta/admin/sharepoint/settings
                        </code>
                    </pre>
                </div>
                <PrimaryButton className='mt-2 text-white bg-blue-600 border-black rounded-lg inline-flex' onClick={() => {
                    setFirstQueryMade(true)
                    setLoading(true)
                    fetch('tenantsettings')
                        .then((response) => {
                            //onsole.log("Status Code: ", response.status, " | Status Text: ", response.statusText) 
                            setCallStatus({
                                StatusCode: response.status,
                                StatusText: response.statusText,
                                TimeOfRequest: new Date().toLocaleTimeString(),
                                StatusBoxColor: (response.statusText === 'OK') ? "border-y-green-600" : "border-y-red-500"
                            })
                            return response.json()
                        })
                        .then((data) => {
                            delete data["@odata.context"]
                            setTenantSettings(data)
                            setLoading(false)
                        })
                }}> Submit Request</PrimaryButton>
                <Label className='text-2xl text-sans mt-4'>Call Status</Label>
                <div className={'bg-gray-100 w-fit rounded-lg p-2 border-y-4 ' + callStatus.StatusBoxColor}>
                    <p className='bg-gray-100 w-fit rounded-lg'><b>Status-Code: </b>{`${callStatus.StatusCode} | `}<b>Response: </b> {callStatus.StatusText}</p>
                    <p className='bg-gray-100 w-fit rounded-lg'><b>Time of Request: </b>{callStatus.TimeOfRequest}</p>
                    {(callStatus.StatusText != 'OK' && callStatus.TimeOfRequest != 'N/A')
                    ? <p className='text-center text-red-500 text-xs'>Check console for more info</p> :
                    undefined}
                </div>
            </div>
            <div className='bg-slate-300 ml-4'>
                <Label className='text-2xl text-sans text-left mt-3'>Results</Label>
                <div id='Results-Box' className='bg-gray-100 rounded-md w-auto text-xs h-[67vh]'>
                    { (firstQueryMade) ?
                            (loading) ?
                                <Spinner className='pt-10' size={SpinnerSize.large} label='Fetching settings...'/>
                                : 
                                <pre className='text-left ml-4 py-2 text-red-800'><code>{JSON.stringify(tenantSettings, 2, "\t")}</code></pre>
                        :
                            <code className='text-right text-red-700 align-middle'>{"<empty response>"}</code>
                    }
                </div>
            </div>
        </div>
    )
}