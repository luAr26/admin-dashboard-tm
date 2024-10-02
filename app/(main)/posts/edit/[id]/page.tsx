"use client";
import BackButton from "@/components/BackButton";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import posts from "@/data/posts";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  body: z.string().min(1, { message: "Body is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  date: z.string().min(1, { message: "Date is required" }),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast();
  const post = posts.find((post) => {
    return post.id === params.id;
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || "",
      body: post?.body || "",
      author: post?.author || "",
      date: post?.date || "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: "Post has been updated successfully",
      description: `Updated by ${post?.author} on ${post?.date}.`,
    });
  };
  return (
    <div>
      <BackButton text="Back to posts" link="/posts" />
      <h3 className="mb-4 text-2xl">Edit post</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-zinc-500 dark:text-white">
                  Title
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-zinc-500 dark:text-white">
                  Body
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter body"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-zinc-500 dark:text-white">
                  Author
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter author"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase text-zinc-500 dark:text-white">
                  Date
                </FormLabel>
                <FormControl>
                  <Input
                    className="border-0 bg-slate-100 text-black focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-slate-500 dark:text-white"
                    placeholder="Enter date"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mt-5 w-full dark:bg-slate-800 dark:text-white">
            Update post
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default PostEditPage;
