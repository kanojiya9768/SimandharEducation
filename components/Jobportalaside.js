import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'

const Jobportalaside = () => {

    useEffect(()=> {
        document.getElementById('show-sidemenu').addEventListener('click',(e)=>{
            document.getElementById('sub-menu-box').classList.add('active')
            document.getElementById('show-sidemenu').style.display='none'
        })

        document.getElementById('close-sidebar').addEventListener('click',(e)=>{
            document.getElementById('sub-menu-box').classList.remove('active')
            document.getElementById('show-sidemenu').style.display='block'
        })

        document.querySelectorAll('.jobportalLink').forEach((link)=>{
            if(link==window.location.href){
                link.classList.add('active')
            }
        })
    })
  return (
   <>
   <aside className='jpbportal-menubar' id='sub-menu-box'>
          <button className='show-sidemenu' id='show-sidemenu'>Side Menu</button>
          <h2>Simandhar Dashboard</h2>
          <button className='close-sidebar' id='close-sidebar'><img src="/img/job_portal/close_sidebar.svg" /></button>
          <nav >
            <Link className='jobportalLink' href="/jobPortal/EducationJobs" ><i><img src="/img/job_portal/jobs_icon.svg"></img></i>Jobs</Link>
            <Link className='jobportalLink' href="/jobPortal/EducationApprovals"><i><img src="/img/job_portal/approval_icon.svg"></img></i>Approvals</Link>
            <Link className='jobportalLink' href="/jobPortal/EducationManagement"><i><img src="/img/job_portal/cm_icon.svg"></img></i>Candidate Management</Link>
            <Link className='jobportalLink' href="/jobPortal/EducationRecruiterManagement"><i><img src="/img/job_portal/rm_icon.svg"></img></i>Recruiter Management</Link>
            <Link className='jobportalLink' href="/jobPortal/CompanyMgmtDetailPage"><i><img src="/img/job_portal/com_icon.svg"></img></i>Company Management</Link>
          </nav>
        </aside>
   </>
  )
}

export default Jobportalaside