/**
 * 
 */
package com.codersknowledge;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author zubayer
 *
 */
@Controller
@RequestMapping("/sample")
public class SampleController {

	@GetMapping
	public String loadSamplePage() {
		return "sample";
	}
}
