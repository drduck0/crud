import { z } from "zod"

export const UserDataSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string()
    }),
    suite: z.string(),
    zipcode: z.string()
  }),
  company: z.object({
    name: z.string(),
    catchPhrase: z.string(), 
    bs: z.string()
  })
});