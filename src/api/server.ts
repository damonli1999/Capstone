let token = '80bd44ca3269aa9f9a5054a7f7cd0dcc8f6e69e14e073173'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://moviessss.glitch.me/api/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://moviessss.glitch.me/api/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id: string, data: any = {}) => {
        const response = await fetch(`https://moviessss.glitch.me/api/movies/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    delete: async (id: string) => {
        const response = await fetch(`https://moviessss.glitch.me/api/movies/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}