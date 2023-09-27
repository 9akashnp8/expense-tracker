// Mock implementation of supabase client

export const supabase = {
    from: () => ({
        select: () => "mock select implementation",
        insert: () => "mock insert implementation",
    }),
};
