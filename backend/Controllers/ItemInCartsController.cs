using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ElectronicGadgets.Models;

namespace ElectronicGadgets.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemInCartsController : ControllerBase
    {
        private readonly ProductContext _context;

        public ItemInCartsController(ProductContext context)
        {
            _context = context;
        }

        // GET: api/ItemInCarts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemInCart>>> GetCarts()
        {
          if (_context.Carts == null)
          {
              return NotFound();
          }
            return await _context.Carts.ToListAsync();
        }

        // GET: api/ItemInCarts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemInCart>> GetItemInCart(long id)
        {
          if (_context.Carts == null)
          {
              return NotFound();
          }
            var itemInCart = await _context.Carts.FindAsync(id);

            if (itemInCart == null)
            {
                return NotFound();
            }

            return itemInCart;
        }

        // PUT: api/ItemInCarts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemInCart(long id, ItemInCart itemInCart)
        {
            if (id != itemInCart.Id)
            {
                return BadRequest();
            }

            _context.Entry(itemInCart).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemInCartExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ItemInCarts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemInCart>> PostItemInCart(ItemInCart itemInCart)
        {
          if (_context.Carts == null)
          {
              return Problem("Entity set 'ProductContext.Carts'  is null.");
          }
            _context.Carts.Add(itemInCart);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemInCart", new { id = itemInCart.Id }, itemInCart);
        }

        // DELETE: api/ItemInCarts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemInCart(long id)
        {
            if (_context.Carts == null)
            {
                return NotFound();
            }
            var itemInCart = await _context.Carts.FindAsync(id);
            if (itemInCart == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(itemInCart);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemInCartExists(long id)
        {
            return (_context.Carts?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
