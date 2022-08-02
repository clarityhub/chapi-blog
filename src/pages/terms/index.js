import React from 'react';
import styled from '@emotion/styled';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import Layout from '../../components/Layout';

const Box = styled.div`
    margin-bottom: 3rem;
    margin-top: 3rem;
`;

const UL = styled.ul`
    list-style: disc;
    margin-left: 20px;
    margin-top: 20px;

    li {
        padding-left: 20px;
    }
`;

export default ({ location }) => {
	return (
		<Layout location={location}>
			<Box>
				<FlexGridContainer>
					<div class="terms">
						<Typography type="h1">Terms and Conditions</Typography>
                        
						<Typography type="p">Effective date: February 13, 2019</Typography>
                        
                        
						<Typography type="p">Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://stellar.clarityhub.io
                            website (the "Service") operated by Clarity Hub, Inc ("us", "we", or "our").</Typography>
                        
						<Typography type="p">Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms
                            apply to all visitors, users and others who wish to access or use the Service.</Typography>
                        
						<Typography type="p">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you
                            do not have permission to access the Service.</Typography>
                        
                        
						<Typography type="h2">Copyright Policy</Typography>
                        
						<Typography type="p">We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the
                            Service infringes on the copyright or other intellectual property rights ("Infringement") of any person or entity.</Typography>
                        
						<Typography type="p">If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in
                            a way that constitutes copyright infringement, please submit your claim via email to dmca@clarityhub.io, with the subject
                            line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement as detailed
                            below, under "DMCA Notice and Procedure for Copyright Infringement Claims"</Typography>
                        
						<Typography type="p">You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on
                            the infringement of any Content found on and/or through the Service on your copyright.</Typography>
                        
                        
						<Typography type="h2">DMCA Notice and Procedure for Copyright Infringement Claims</Typography>
                        
						<Typography type="p">You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with
                            the following information in writing (see 17 U.S.C 512(c)(3) for further detail):</Typography>
                        
                        
						<UL>
							<li>
								<Typography type="p">an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;</Typography>
							</li>
							<li>
								<Typography type="p">a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of
                                the location where the copyrighted work exists or a copy of the copyrighted work;</Typography>
							</li>
							<li>
								<Typography type="p">identification of the URL or other specific location on the Service where the material that you claim is infringing is
                                located;</Typography>
							</li>
							<li>
								<Typography type="p">your address, telephone number, and email address;</Typography>
							</li>
							<li>
								<Typography type="p">a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner,
                                its agent, or the law;</Typography>
							</li>
							<li>
								<Typography type="p">a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you
                                are the copyright owner or authorized to act on the copyright owner's behalf.</Typography>
							</li>
						</UL>
                        
						<Typography type="p">You can contact our Copyright Agent via email at dmca@clarityhub.io</Typography>
                        
                        
						<Typography type="h2">Intellectual Property</Typography>
                        
						<Typography type="p">The Service and its original content, features and functionality are and will remain the exclusive property of Clarity Hub,
                            Inc and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign
                            countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written
                            consent of Clarity Hub, Inc.</Typography>
                        
                        
						<Typography type="h2">Links To Other Web Sites</Typography>
                        
						<Typography type="p">Our Service may contain links to third party web sites or services that are not owned or controlled by Clarity Hub, Inc</Typography>
                        
						<Typography type="p">Clarity Hub, Inc has no control over, and assumes no responsibility for the content, privacy policies, or practices of any
                            third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.</Typography>
                        
						<Typography type="p">You acknowledge and agree that Clarity Hub, Inc shall not be responsible or liable, directly or indirectly, for any damage
                            or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services
                            available on or through any such third party web sites or services.</Typography>
                        
						<Typography type="p">We strongly advise you to read the terms and conditions and privacy policies of any third party web sites or services that
                            you visit.</Typography>
                        
                        
						<Typography type="h2">Termination</Typography>
                        
						<Typography type="p">We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under
                            our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</Typography>
                        
						<Typography type="p">If you wish to terminate your account, you may simply discontinue using the Service.</Typography>
                        
						<Typography type="p">All provisions of the Terms which by their nature should survive termination shall survive termination, including, without
                            limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</Typography>
                        
                        
						<Typography type="h2">Indemnification</Typography>
                        
						<Typography type="p">You agree to defend, indemnify and hold harmless Clarity Hub, Inc and its licensee and licensors, and their employees, contractors,
                            agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or
                            debt, and expenses (including but not limited to attorney's fees), resulting from or arising out of a) your use and access
                            of the Service, by you or any person using your account and password, or b) a breach of these Terms.</Typography>
                        
                        
                        
						<Typography type="h2">Limitation Of Liability</Typography>
                        
						<Typography type="p">In no event shall Clarity Hub, Inc, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for
                            any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data,
                            use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the
                            Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and
                            (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort
                            (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage,
                            and even if a remedy set forth herein is found to have failed of its essential purpose.</Typography>
                        
                        
						<Typography type="h2">Disclaimer</Typography>
                        
						<Typography type="p">Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service
                            is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties
                            of merchantability, fitness for a particular purpose, non-infringement or course of performance.</Typography>
                        
						<Typography type="p">Clarity Hub, Inc its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted,
                            secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free
                            of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</Typography>
                        
                        
						<Typography type="h2">Exclusions</Typography>
                        
						<Typography type="p">Some jurisdictions do not allow the exclusion of certain warranties or the exclusion or limitation of liability for consequential
                            or incidental damages, so the limitations above may not apply to you.</Typography>
                        
                        
                        
						<Typography type="h2">Governing Law</Typography>
                        
						<Typography type="p">These Terms shall be governed and construed in accordance with the laws of Arizona, United States, without regard to its
                            conflict of law provisions.</Typography>
                        
						<Typography type="p">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision
                            of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in
                            effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior
                            agreements we might have had between us regarding the Service.</Typography>
                        
                        
						<Typography type="h2">Changes</Typography>
                        
						<Typography type="p">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we
                            will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined
                            at our sole discretion.</Typography>
                        
						<Typography type="p">By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms.
                            If you do not agree to the new terms, you are no longer authorized to use the Service.</Typography>
                        
                        
						<Typography type="h2">Contact Us</Typography>
                        
						<Typography type="p">If you have any questions about these Terms, please contact us:</Typography>

						<UL>
							<li><Typography type="p">By email: support@clarityhub.io</Typography></li>
                        
							<li><Typography type="p">By mail: 2320 East Baseline Rd Suite 148-135 Phoenix AZ, 85042-6951</Typography></li>
						</UL>
					</div>
            
				</FlexGridContainer>
			</Box>

		</Layout>
	);
};
