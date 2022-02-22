//نستورد هنا ما نحتاجه من مكتبات نيــر
//نحتاج
//Context & u128
//لمثال رصيد الحساب
import { Context, u128 } from "near-sdk-as";

// نحتاج هذا السطر حتى يكون الكلاس الخاص بنا صالح للإستخدام فى بلوك تشين نيـر
@nearBindgen
export class Contract {
  // اسم الكلاس ممكن أن يتغير لأى اسم آخر

  public message: string = "hello world";

  // دالة تقوم بإرجاع قيمة المتغير
  //message
  helloWorld(): string {
    return this.message;
  }
  //دالة تقوم بتغيير قيمة المتغير بالقيمة المرسلة
  //mutateState
  // نحتاجها هنا حتى تكون الدالة قادرة على تغيير قيم مسجلة داخل البلوك تشين

  @mutateState()
  update(message: string): string {
    this.message = message;
    return "updated";
  }
  //دالة تقوم بإرجاع رصيد الحساب الحالى الذي يحمل هذا الكود عليه
  getBalance(): u128 {
    return Context.accountBalance;
  }
}
