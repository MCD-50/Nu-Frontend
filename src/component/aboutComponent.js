//from system
import React, { Component } from "react";

import * as collection from "../helper/collection";
import * as constant from "../helper/constant"

//from antd
import antd from "antd";

//from app
class AboutComponent extends Component {
	render() {
		return (
			<div style={{ fontSize: 17 }}>
				<div style={{ background: "#000", padding: 200, marginTop: -15, }}>
					<div style={{ textAlign: "center", margin: "0 auto", maxWidth: 600 }}>
						<div className="header-header" style={{ color: "#fff", fontSize: 30, marginBottom: 30 }}>HOW IT WORKS</div>
						<p style={{ fontSize: 19, color: "#fff", textAlign: 'center' }}>Read how our platform functions.</p>
					</div>
				</div>
				<div style={{ padding: 100, paddingTop: 40, paddingBottom: 40 }}>
					<ul>
						<li>
							<p>First Bob will create an account by providing the email (Used only for communication purpose for now) and password (a password for generating the blockchain address).</p>
						</li>
						<li>
							<p>Now bob will get the following values and needs only the accountAddress and password for using the platform services.</p>
							<ul>
								<li>accountAddress (Ethereum address)</li>
								<li>publicKey (Nucypher public key)</li>
								<li>privateKey (Nucypher private key)</li>
							</ul>
						</li>
						<li>
							<p>Now Bob will upload the data by filling the folloing values (Since system is anonymous there is no login and all)</p>
							<ul>
								<li>accountAddress</li>
								<li>password</li>
								<li>publicKey</li>
								<li>privateKey</li>
								<li>detail about the DNA</li>
								<li>file (blob)</li>
							</ul>
						</li>
						<li>
							<p>Once bob uploads the data. It will be encrypyted and hosted to IPFS. For encryption Bob's (publicKey, privateKey) will be used and following will be generated</p>
							<ul>
								<li>capsule (capsule object which be stored against a capsuleId[uuid])</li>
								<li>ciphettext</li>
							</ul>
						</li>
						<li>
							<p>Now these two values (capsuleId, ciphertext) will stored on blockchain by calling our solidty contract and transaction hash will be generated.</p>
						</li>
						<li>
							<p>Bob will get the capsuleId (aka salivaId) and transactionHash of the blockchain transaction</p>
						</li>
						<li>
							<p>The capsuleId and deatils of DNA data (like whose DNA is this and all) will be visible to everyone.</p>
						</li>
						<li>
							<p>Suppose alice wants to access the DNA data after looking and DNA details</p>
						</li>
						<li>
							<p>Now alice will create an account by providing the email (Used only for communication purpose for now) and password (a password for generating the blockchain address).</p>
						</li>
						<li>
							<p>Alice will create a "Request access" by providing the following details</p>
							<ul>
								<li>accountAddress (alice's)</li>
								<li>Nucypher publicKey (alice's) for creating the policy where kfrags are attached</li>
								<li>capsuleId</li>
								<li>password (alice's)</li>
							</ul>
						</li>
						<li>
							<p>A mail will be sent to Bob's email address for the consent. Bob can give his consent by clicking the link in email.</p>
						</li>
						<li>
							<p>Once bob give the concent a policyId will be generated and for Alice and alice will get an email containing a secret code to access the policyId and transaction will be made on blockchain with following values</p>
							<ul>
								<li>policyId</li>
								<li>capsuleId</li>
								<li>pubKey</li>
								<li>singingPubKey</li>
							</ul>
						</li>
						<li>
							<p>Now alice will go to the "decode page" and paste the received secret code.</p>
						</li>
						<li>
							<p>Upon decode request the kfrags will be extracted and attached to the capsule (fetched from capsule map using capsuleId). And decrypted IPFS file link will be shared with the Alice.</p>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default AboutComponent;