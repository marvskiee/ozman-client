import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ open, close }) => {
 if (!open) return null;

 return (
  <div className="fixed inset-0 z-50 bg-slate-200 bg-opacity-60">
   <aside onClick={(e) => e.stopPropagation()} className="m-10 rounded bg-white p-14 shadow-xl">
    <header className="mb-4 flex items-center justify-between">
     <h2 className="text-lg font-bold">Terms & Conditions</h2>
     <button onClick={close} className="rounded-full bg-primary p-1">
      <AiOutlineClose color="white" />
     </button>
    </header>
    <p className="h-96 overflow-y-scroll leading-7">
     The terms and conditions detailed below apply to any services provided by AIO Internet Limited (“AIO Internet”) once AIO Internet has accepted your order by sending you a written confirmation or by commencing the provision of The Service (as defined below)
     <br />
     1. AIO Internet shall use reasonable endeavors to provide the service to you specified in your order (“The Service”). You acknowledge and agree that AIO Internet does not guarantee the provision of The Service on an uninterrupted basis but that AIO Internet shall use reasonable endeavors to meet the service levels, if any, specified on the service order form. In the event that no service levels are defined, AIO Internet shall provide the relevant service will reasonable care and skill. You further acknowledge and agree that AIO Internet may revise it’s service levels from time to time, and that you accept such revised service levels as notified.
     <br />
     2. If AIO Internet applies for the registration of a domain name on your behalf as part of The Service you warrant, represent and undertake as follows: a. that you have the right to use the name which will form the prefix of the domain name; and b. by requesting that AIO Internet apply to register the domain name you agree to comply with the relevant registration authority’s terms and conditions as specified from time to time and indemnify and keep AIO Internet and it’s directors and staff fully and effectively indemnified at all times against all costs, claims, liabilities, losses, damages, actions and expenses (including without limitation, legal expenses) arising directly or indirectly from the registration and/or breach by you of this clause 2 including, without limitation, the relevant registration authority’s terms and conditions.
     <br />
     3. AIO Internet shall use reasonable endeavors during Office Hours (as defined below) to provide advice and support concerning the provision of The Services to you by e-mail on the address specified at http://www.aiointernet.com/ (“The Website”) from time to time and shall, where appropriate, seek to provide remote diagnosis and fault corrections. AIO Internet shall provide such advice and support with reasonable care and skill. For the avoidance of doubt, AIO Internet shall not be obliged to carry out any site visits or otherwise provide support other than by e-mail. For the purposes of this clause 3, “Office Hours” shall be defined as 09:00 to 17:00 on any weekday excluding AIO holidays and bank holidays in the Philippines.
     <br />
     4. Your sole remedy for failure by AIO Internet to meet the Service Levels shall be to terminate this Agreement in accordance with clause 14
     <br />
     5. This Agreement shall commence on the date specified by AIO Internet in it’s confirmation of your order or the date that AIO Internet commences the provision of The Service (whichever is sooner) ands shall continue in force until terminated in accordance with it’s terms
     <br />
     6. You must pay AIO Internet for the for The Service at the rate agreed with AIO Internet at the time of placing your order as such rate may be revised by AIO Internet from time to time provided that AIO Internet does not revise such rate more than once in any period of twelve months and you shall pay such rate in advance on or before the beginning of each payment period as agreed with AIO Internet at the time of placing your order (“the due date”). Any failure by you to pay in full by the due date will entitle AIO Internet at any time thereafter without notice to you to terminate the provision of The Service with immediate effect.
     <br />
     7. You undertake and agree to: a. keep your contact details up to date and forthwith notify us of any amendments; b. keep your passwords confidential and only disclose them to such of your employees who need to know them and you will procure that those employees keep such passwords confidential; and c. comply with the terms and conditions of use of any third party networks and services used in the provision of The Service which are not directly operated or provided by AIO Internet and/or which are not under the control of AIO Internet You acknowledge and agree that:
     <br />
     8. a. From time to time, The Service may be closed down and suspended in order for work to be carried out related to the upgrading or maintenance of The Service or for other reasons relating to the provision of The Service. AIO Internet shall use reasonable endeavors to give you reasonable notice of such closure and suspension and shall use reasonable endeavors to ensure such works are carried out as quickly as reasonably possible. b. AIO Internet is entitled to alter of transfer IP addresses from time to time for any reason whatsoever. Whilst AIO Internet shall use reasonable endeavors to give reasonable notice of such alteration or transfer, AIO Internet does not guarantee this. All IP addresses supplied are supplied as non-portable RIPE PA or PI address space and remain the property of AIO Internet and must not be used on termination of The Service, and AIO Internet shall thereafter be entitled to use such IP addresses for any purpose whatsoever. No IP addresses are
     transferable to other service providers; and c. In the case of Services comprising Leased Lines or ADSL, in each case as specified on The Website, AIO Internet is providing The Service using services provided by third parties and that without prejudice to clause 7(c) AIO Internet shall not be liable under this Agreement for a failure or degradation in respect of The Service if it is due to an act or omission of such third party.
     <br />
     9. By submitting you order for the provision of The Service on the terms and conditions of this Agreement, you hereby expressly consent to AIO Internet using any and all information provided by you from time to time for any purpose whatsoever including, without limitation, the marketing of AIO Internet’s products and/or services to you and the sending to you of emails concerning AIO Internet products and services and or any technical announcements by AIO Internet concerning The Service and you hereby expressly consent to AIO Internet transferring the information to any third party that is a group of undertaking of AIO Internet (as defined in Section 259 of the Companies Act 1985 (as amended)) anywhere in the world. For the avoidance of doubt, AIO Internet will not sell such information to any third party
     <br />
     10. All copyright, trade marks and other intellectual property rights subsisting of created in the provision of The Service shall remain the property of AIO Internet or it’s licensor and you will not derive and right, title or interest in them. You shall indemnify and keep AIO Internet indemnified against any and all losses, claims, liabilities, damages, demands, costs and expenses (including, without limitation, legal costs and expenses) incurred by AIO Internet as a result of failure by you to comply with this clause 10
     <br />
     11. You and AIO Internet hereby agree that any information of a confidential or proprietary nature supplied to the other or generated by either party during the term of this Agreement shall not be used by the other, save for the purposes of this Agreement, and shall not be disclosed to any third party, in each case, without the prior written consent of the other, whether during the term of this Agreement or after it’s termination or expiration
     <br />
     12. AIO Internet may, as it’s sole opinion and without any obligation to refund monies paid by you pursuant to clause 6, terminate this Agreement immediately on written notice to you if: a. ordered to do so by a court of competent jurisdiction; b. the use of The Service is or becomes illegal; c. if there is a breach of this Agreement d. the continued use of The Service could cause technical problems on AIO Internet’s network, or the Internet, or e. you act in any way or do anything which may reasonably be construed to impugn the trade mark rights of AIO Internet or otherwise be detrimental to the business, goodwill or reputation of AIO Internet (including, without limitation, the ability of AIO Internet to maintain Service Levels for it’s other customers)
     <br />
     13. Either party may terminate this Agreement by serving not less than 45 days written notice on the other provided that if you terminate this Agreement pursuant to this clause 13 you shall not be entitled to a refund of any monies paid pursuant to clause 6, and in the case of the Services comprising Leased Lines or ADSL, or from time to time other services, you shall promptly reimburse to AIO Internet any and all of the cancellation charges that AIO Internet incurs to a third party as a result of your termination of this Agreement
     <br />
     14. You may terminate this Agreement immediately by serving written notice on AIO Internet if AIO Internet fails persistently to meet the Service Levels
     <br />
     15. AIO Internet gives no warranty and makes no representation in respect of The Services save as expressly set out in this Agreement and hereby excludes, to the fullest extent permitted by law, all conditions, warranties, terms, undertakings and representations, expressed or implied whether by statue, common law or otherwise in relation to such Service.
     <br />
     16. AIO Internet shall not be liable to you whether in contract, tort, by statute or otherwise in respect of any loss of profits and/or for any special, indirect, incidental or consequential loss or damage arising out of or in connection with The Service, including without limitation: a. loss of revenue; and/or b. loss of anticipated savings; and/or c. loss of business and/or goods; and/or d. loss of goodwill; and/or e. loss of use; and/or f. lose and/or corruption of data and/or other information; and/or g. downtime; and/or h. any damage relation to the procurement of any substitute services For the avoidance of doubt, neither the types of loss and/or damage specified in sub-clauses (a) to (h) inclusive of this clause 16 nor any similar types of loss and/or damage shall constitute direct loss for the purposes of this Agreement
     <br />
     17. No waiver by either party of any provisions of this Agreement shall be binding unless made expressly and confirmed in writing. Any such waiver shall not apply to any subsequent or any other matter, non-compliance of breach.
     <br />
     18. Notices to either party must be given in writing and sent by first class post, e-mail or facsimile to the relevant addresses specified on The Website in the case of AIO Internet, and in your order in your case, as amended by no less that 15 days notice in writing to the parties from time to time. A notice shall be deemed delivered within three Business Days of posting in the case of first class post; twenty four (24) hours after sending the e-mail in the case of e-mail and on completion of the transmission as shown in the transmission report in the case of facsimile
     <br />
     19. No person other than a party to this Agreement shall be entitled to enforce and term of it.
     <br />
     20. In no event shall AIO Internet’s liability to you whether in contract, tort, by statute or otherwise exceed the amount paid by you for the relevant Service.
     <br />
     21. Nothing in this Agreement shall exclude or restrict the liability of either party for fraudulent misrepresentation and/or for death or personal injury arising as a result of the negligence of that party, it’s officers, employees, agents and/or sub-contractors
     <br />
     22. AIO Internet reserves the right to make any changes or amendments to the terms of service (“TOS”) that it deems necessary. AIO Internet will give a minimum of fifteen (15) days written notice of any changes to the TOS.
     <br />
     23. The terms and conditions are exclusively governed by the Philippine law and you and AIO Internet submit to the exclusive jurisdiction of the the Philippine courts.
    </p>
   </aside>
  </div>
 );
};

export default Modal;
