import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { UserFormData } from "./FormMountController";

export const DynamicFieldForm = () => {
    const { control } = useFormContext<UserFormData>();

    const { fields } = useFieldArray({
        control,
        name: "users",
    });

    return (
        <Card className="w-full max-w-4xl bg-gradient-card shadow-elegant border-0">
            <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    Dynamic User Form
                </CardTitle>
                <p className="text-muted-foreground">Add, remove, and manage users with useFieldArray</p>
            </CardHeader>

            <CardContent className="space-y-6">
                <form className="space-y-6">
                    <div className="space-y-4">
                        {fields.map((field, index) => (
                            <div
                                key={field.id}
                                className="p-6 border border-border rounded-lg bg-background/50 animate-fade-in"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-foreground">User {index + 1}</h3>
                                    {fields.length > 1 && (
                                        <Button
                                            type="button"
                                            variant="outline"
                                            size="sm"
                                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor={`users.${index}.name`}>Name</Label>
                                        <Input
                                            id={`users.${index}.name`}
                                            placeholder="John Doe"
                                            className="transition-smooth focus:shadow-elegant"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`users.${index}.email`}>Email</Label>
                                        <Input
                                            id={`users.${index}.email`}
                                            type="email"
                                            placeholder="john@example.com"
                                            className="transition-smooth focus:shadow-elegant"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor={`users.${index}.role`}>Role</Label>
                                        <Input
                                            id={`users.${index}.role`}
                                            placeholder="Developer"
                                            className="transition-smooth focus:shadow-elegant"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 bg-gradient-primary text-primary-foreground border-0 hover:opacity-90 transition-smooth"
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add User
                        </Button>

                        <Button
                            type="submit"
                            className="flex-1 bg-gradient-primary border-0 hover:opacity-90 transition-smooth shadow-elegant"
                        >
                            Submit Form
                        </Button>

                        <Button type="button" variant="outline" className="flex-1 transition-smooth">
                            Reset Form
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
