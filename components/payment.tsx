'use client'
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"


function Payment() {
    const { toast } = useToast()
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 h-full w-full   dark:bg-grid-white/[0.2] bg-grid-black/[0.05] relative ">
  
    <div className="flex justify-center items-center mt-10">
      <Card className="w-full max-w-md ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Complete Payment</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-400">
            Choose your preferred payment method to complete the transaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="block font-medium mb-1" htmlFor="card">
              Credit/Debit Card
            </Label>
            <div className="space-y-4">
              <Input className="w-full" id="card" placeholder="Card number" type="text" />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="block text-sm font-medium mb-1" htmlFor="expiry">
                    Expiry Date
                  </Label>
                  <Input className="w-full" id="expiry" placeholder="MM/YY" type="text" />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-1" htmlFor="cvv">
                    CVV
                  </Label>
                  <Input className="w-full" id="cvv" placeholder="CVV" type="text" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-gray-200"></div>
          <div>
            <Label className="block font-medium mb-1 " htmlFor="upi ">
              UPI
            </Label>
            <Input className="w-full" id="upi" placeholder="Enter your UPI ID" type="text" />
          </div>
          <div className="w-full h-0.5 bg-gray-200"></div>

          <div>
            <Label className="block font-medium mb-1" htmlFor="bank">
              Net Banking
            </Label>
            <Select  >
              <SelectTrigger>
                <SelectValue placeholder="Select your bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sbi">State Bank of India</SelectItem>
                <SelectItem value="hdfc">HDFC Bank</SelectItem>
                <SelectItem value="icici">ICICI Bank</SelectItem>
                <SelectItem value="axis">Axis Bank</SelectItem>
                <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button className="w-full" type="submit"    onClick={() => {
        toast({
          title: "Payment Successfull 🎉",
          description: "Friday, February 10, 2023 at 5:57 PM",
        })
      }}>
            Complete Payment
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Payment