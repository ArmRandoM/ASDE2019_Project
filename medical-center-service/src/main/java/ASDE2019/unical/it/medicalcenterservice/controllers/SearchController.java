package ASDE2019.unical.it.medicalcenterservice.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ASDE2019.unical.it.medicalcenterservice.model.User;
import ASDE2019.unical.it.medicalcenterservice.services.SearchService;

@RestController
public class SearchController
{
	@Autowired
	private SearchService searchService;

	@CrossOrigin
	@RequestMapping(value = "/searchForUser", method = RequestMethod.POST)
	public List<User> searchUser(@RequestParam(value = "search", required = true) String value)
	{
		return searchService.findUsersByValue(value);
	}
}
