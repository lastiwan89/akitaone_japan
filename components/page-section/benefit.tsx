import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

const Benefit = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="flex gap-4">
            <Card className="bg-linear-30 from-fuchsia-950 to-cyan-900">
                <CardHeader>
                    <CardTitle className="uppercase font-medium">
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {description}
                </CardContent>
            </Card>
        </div>
    )
}

export default Benefit
