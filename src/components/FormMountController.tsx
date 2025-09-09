import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Power } from "lucide-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldForm } from "./DynamicFieldForm";

export interface UserFormData {
    users: {
        name: string;
        email: string;
        role: string;
    }[];
}

export const FormMountController = () => {
    const [isFormMounted, setIsFormMounted] = useState(true);
    const form = useForm<UserFormData>({
        defaultValues: {
            users: [{ name: "", email: "", role: "" }],
        },
    });

    form.watch(() => {
        console.log("form changed");
    });

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                        useFieldArray Demo
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Demonstrating React Hook Form's useFieldArray with mount/unmount behavior
                    </p>
                </div>

                {/* Mount Controller */}
                <Card className="max-w-md mx-auto bg-gradient-card shadow-elegant border-0">
                    <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2 text-xl">
                            <Power className="h-5 w-5 text-primary" />
                            Form Controls
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex items-center justify-center space-x-3">
                        <Checkbox
                            id="form-mount"
                            checked={isFormMounted}
                            onCheckedChange={(checked) => setIsFormMounted(checked === true)}
                            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor="form-mount" className="text-base font-medium cursor-pointer select-none">
                            {isFormMounted ? "Form Mounted" : "Form Unmounted"}
                        </Label>
                    </CardContent>
                </Card>

                {/* Dynamic Form */}
                <div className="flex justify-center">
                    {isFormMounted ? (
                        <FormProvider {...form}>
                            <div className="animate-slide-up w-full">
                                <DynamicFieldForm />
                            </div>
                        </FormProvider>
                    ) : (
                        <Card className="w-full max-w-4xl bg-muted/50 border-dashed border-2 border-muted-foreground/20">
                            <CardContent className="flex items-center justify-center h-96">
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                                        <Power className="h-8 w-8 text-muted-foreground" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-muted-foreground">
                                        Form Component Unmounted
                                    </h3>
                                    <p className="text-muted-foreground">
                                        Check the box above to mount the form component
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Info Card */}
                <Card className="max-w-3xl mx-auto bg-gradient-card border-0">
                    <CardHeader>
                        <CardTitle className="text-xl text-center">How It Works</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4 text-muted-foreground">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground">useFieldArray Features:</h4>
                                <ul className="space-y-1 text-sm">
                                    <li>• Dynamic field addition/removal</li>
                                    <li>• Form validation per field</li>
                                    <li>• Unique key management</li>
                                    <li>• State persistence within mount</li>
                                </ul>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-semibold text-foreground">Mount/Unmount Behavior:</h4>
                                <ul className="space-y-1 text-sm">
                                    <li>• Form state resets on unmount</li>
                                    <li>• Fresh component instance on remount</li>
                                    <li>• Default values are reapplied</li>
                                    <li>• useFieldArray re-initializes</li>
                                </ul>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
