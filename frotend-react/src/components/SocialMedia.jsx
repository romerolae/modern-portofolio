import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a href="https://github.com/romerolae">
				<FaGithub />
			</a>
		</div>
		<div>
			<a href="https://www.linkedin.com/in/romerolae/">
				<FaLinkedin />
			</a>
		</div>
		<div>
			<a href="https://twitter.com/home">
			<BsTwitter />
			</a>
		</div>
	</div>
);

export default SocialMedia;
