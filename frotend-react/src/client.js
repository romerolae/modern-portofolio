import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
	projectId: 'hn9w6weo',
	dataset: 'production',
	apiVersion: '2023-01-29',
	useCdn: true,
	token:
		'skcTHg9gQwGTa4sLFfqetnLaBkIp9sbbmLkOhVMRDfa71aIBJTVQK0JsEx2lcrdYjUogvA7RqLectDB7L4Ro3MruKsqXIsI0dJuWJQnKssVKYBeQoYL9LRfqEvq8vkaEdjJqjCWFTXM3C8IFQc2aBeEc3RCneJeElRxy4AsW3411VSBtLGu1',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
