exports.seed = function(knex) {
	return knex('tracks').del().then(function() {
		const tracks = [
			{
				name: 'UX',
				description:
					'UX Designers are focused on the user. They aim to create positive experiences using their designs. They do this using an empathetic approach to research and usability testing. They are responsible for the blueprints the developers will recieve to build the project. While they advocate for the user, they also have to consider business and stakeholder’s inputs. A good design should leave a user happy, and in return, a positive return for the business.',
				shortDesc: 'Design great experiences for users',
				strengths:
					'You enjoy talking with people. You are courteous, and socially aware which creates empathy towards people you interact with. You have a keen sense of aethetics. Beauty intruigues you more than how something actually works. You are organized, and ambiguity frustrates you. You want things to work properly, and in understanding this, you go out of your way to make sure others have a good experience. You would rather let people experience over telling them about the experience, because it isn’t the same.',
				link: 'https://www.youtube.com/embed/Ovj4hFxko7c'
			},
			{
				name: 'Full Stack',
				description:
					'Full Stack Developers are able to create almost anything on the web. They are responsible for the entire computer system including the frontend and backend. The frontend is the user interface, while the backend consists of data bases and internal architecture to create functionality. They often collaborate with other developers, and may work with UX designers who assist with the front end. Full stack work on mobile, web, or native application stacks.',
				shortDesc: 'Create anything on the internet',
				strengths:
					"You are a bit of an introvert and enjoy close friends. You prefer to work on your own or with likeminded people. You learn by example, applying it to your unique scenario. You are intrigued with how all systems work together to produce something functional. You are resilient in your work, and systematic. Problems are a challenge to be solved. If you try something and it doesn't work, you view that as one less mistake you have to make in order to achieve success. You are logical and matter of fact in your explanation of complex topics.",
				link: 'https://www.youtube.com/embed/GEfuOMzRgXo'
			},
			{
				name: 'DS',
				description:
					'Data Science is a field that aims to extract meaning from data sets. This requires tools and methods from statistics and machine learning. Data is subject to human error and unpredictability, therefore a data scientist must collect, clean, and discover meaning out of the ambiguity. They not only must create meaning, they need to clearly communicate their findings in an empathetic way in order to be used properly.',
				shortDesc: 'Extract and interpret data',
				strengths:
					'You enjoy working through problems on your own. You are capable of understanding complex problems often thinking critically about the validity of information given to you. You think holisticlly, perhaps even philosophically, but always question everything. In order to find answers to problem unsolved, you use a scientific apporoach. Testing your hypothosis to find answers. You value customization and functionality over something visually appealing. You can also explain complex topics in a simple way that still carries the core meaning.',
				link: 'https://www.youtube.com/embed/-AkBfBWr_Gw'
			},
			{
				name: 'IOS',
				description:
					'iOS Developers are responsible for mobile applications powered by Apple’s operating system. iOS tends to have a closed platform. All applications working within their ecosystem, and therefore offer a high standard of quality, but limited to outside optimization. Completed applications will be available through the Apple’s app store. Though they have a lower market share than Android, they pride themselves with a zealous following.',
				shortDesc: 'Develop mobile apps for iOS',
				strengths:
					'You are flexible, and agile in your thinking. You can easily communicate between all department in a company. You are a hands on learner, and do not fully understand until you can try it for yourself. You want to feel the experience, and see the real impact first-hand. You discover a need and want to solve it with a tangible solution. Above all else, you see the future in mobile devices and have a love for quality following beautiful design characteristics.',
				link: 'https://www.youtube.com/embed/W8vPe3--rlA'
			},
			{
				name: 'Android',
				description:
					'Android Developers are responsible for mobile applications owned by Google. Android is an open-sourced platform where anyone can make changes and modifications. This helps create customization and optimization. Completed applications will be available through the Google Play app store. Though they have a bigger market share than Apple, they have lower quality standards for their applications.',
				shortDesc: 'Develop mobile apps for Android',
				strengths:
					'You are flexible, and agile in your thinking. You can easily communicate between all department in a company. You are a hands on learner, and do not fully understand until you can try it for yourself. You want to feel the experience, and see the real impact first-hand. You discover a need and want to solve it with a tangible solution. Above all else, you see the future in mobile devices and have a love for optimization and customization to cater to all people.',
				link: 'https://www.youtube.com/embed/_TgrWBZ40cs'
			}
		];

		return knex('tracks').insert(tracks);
	});
};
