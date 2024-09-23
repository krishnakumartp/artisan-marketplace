const { ClientBuilder } = require('@commercetools/sdk-client-v2');
const { createApiBuilderFromCtpClient } = require('@commercetools/platform-sdk');
const fetch = require('node-fetch');

const projectKey = process.env.CTP_PROJECT_KEY || 'dev-commerce';
const clientId = process.env.CTP_CLIENT_ID || 'uoGmvsXhpsAAxV5MGdDnYWJD';
const clientSecret = process.env.CTP_CLIENT_SECRET || 'YY0mIWec89GvXScZWhF-TFoUdqYUamtn';
const authUrl = process.env.CTP_AUTH_URL || 'https://auth.us-central1.gcp.commercetools.com';
const apiUrl = process.env.CTP_API_URL || 'https://api.us-central1.gcp.commercetools.com';

const client = new ClientBuilder()
    .withProjectKey(projectKey)
    .withClientCredentialsFlow({
        host: authUrl,
        projectKey,
        credentials: {
            clientId,
            clientSecret,
        },
        scopes: [`manage_project:${projectKey}`],
        fetch,
    })
    .withHttpMiddleware({
        host: apiUrl,
        fetch,
    })
    .build();

const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({ projectKey });



const ProductService = {
    getAllProducts: async () => {
        try {
            const response = await apiRoot.products().get().execute();
            console.log('response.body.results', response.body.results);
            return response.body.results;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    createProduct: async (productDraft) => {
        try {
            const response = await apiRoot.products().post({ body: productDraft }).execute();
            return response.body;
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    getProductById: async (productId) => {
        try {
            const response = await apiRoot.products().withId({ ID: productId }).get().execute();
            return response.body;
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    },

    updateProduct: async (productId, updateActions) => {
        try {
            const product = await ProductService.getProductById(productId);
            const response = await apiRoot.products().withId({ ID: productId }).post({
                body: {
                    version: product.version,
                    actions: updateActions,
                },
            }).execute();
            return response.body;
        } catch (error) {
            console.error('Error updating product:', error);
            throw error;
        }
    },

    deleteProduct: async (productId) => {
        try {
            const product = await ProductService.getProductById(productId);
            const response = await apiRoot.products().withId({ ID: productId }).delete({
                queryArgs: { version: product.version },
            }).execute();
            return response.body;
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    },
    searchProducts: async (searchCriteria) => {
        try {
            const response = await apiRoot.products().search().post({ body: searchCriteria }).execute();
            console.log('response.body.results', response.body.results);
            return response.body.results;
        } catch (error) {
            console.error('Error searching products:', error);
            throw error;
        }
    },
};

module.exports = ProductService;